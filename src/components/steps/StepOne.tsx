"use client";
import { Button, Checkbox } from "@mui/material";

const StepOne = ({ config } : { config: any}) => {
  const query = new URLSearchParams({
    client_id: config.CLIENT_ID,
    scope: config.SCOPES.join(" "),
    response_type: "code",
    redirect_uri: config.REDIRECT_URI,
  });
  const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${query.toString()}`;

  return (
    <div>
      <h1 className="text-gray-400 text-md">Step One</h1>
      <h1 className="text-xl font-bold my-2">
        Configure Your Graph API Client
      </h1>
      <div>
        <p>
          <Checkbox disabled checked required color="success" size="medium"/>
          Client ID
        </p>
        <p>
          <Checkbox disabled checked required />
          Client Secret
        </p>
        <p>
          <Checkbox disabled checked required />
          Redirect URI
        </p>
      </div>
      <div className="w-11/12 mt-5 mx-auto">
        <Button variant="outlined" className="w-full" href={url} disabled>Authenticate with Microsoft</Button>
      </div>
    </div>
  );
};

export default StepOne;
