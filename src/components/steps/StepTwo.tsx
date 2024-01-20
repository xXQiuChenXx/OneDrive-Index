import { getToken } from "@/utils/requests";
import { Button } from "@mui/material";
import { IconCircleCheckFilled, IconXboxX } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { tokenResponse } from "@/utils/requests";

const StepTwo = ({
  config,
  setDisabled,
}: {
  config: any;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}) => {
  const [data, setData] = useState<tokenResponse>();
  const query = new URLSearchParams({
    client_id: config.CLIENT_ID,
    scope: [
      "Files.ReadWrite",
      "Files.Read.All",
      "Files.ReadWrite.All",
      "Files.ReadWrite.Selected",
      "offline_access",
    ].join(" "),
    response_type: "code",
    redirect_uri: config.REDIRECT_URI,
  });
  const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${query.toString()}`;
  
  useEffect(() => {
    getToken().then((t) => {
      if(t.success) setDisabled(false)
      console.log(t)
      setData(t);
    });
  }, []);

  return (
    <div>
      <h1 className="text-gray-400 text-md">Step 2</h1>
      <h1 className="text-xl font-bold my-2">Authentication</h1>
      <div className="mt-5 flex flex-col gap-2">
        <h4>
          <IconCircleCheckFilled className="inline-block mr-3" /> Client ID:{" "}
          {config?.CLIENT_ID}
        </h4>
        <h4>
          <IconCircleCheckFilled className="inline-block mr-3" />
          Client Secret
        </h4>
        <h4>
          {data?.success ? (
            <IconCircleCheckFilled className="inline-block mr-3" />
          ) : (
            <IconXboxX className="inline-block mr-3" />
          )}
          Refresh Token
        </h4>
        <h4>
          {data?.success ? (
            <IconCircleCheckFilled className="inline-block mr-3" />
          ) : (
            <IconXboxX className="inline-block mr-3" />
          )}
          Access Token
        </h4>
      </div>
      <div className="mt-5 px-3">
        <Button href={url} variant="outlined" className="w-full">
          Authenticate with microsoft
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
