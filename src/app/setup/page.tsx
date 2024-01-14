import config from "@/config/api.config";

const Setup = () => {
  const query = new URLSearchParams({
    client_id: config.CLIENT_ID,
    scope: config.SCOPES.join(" "),
    response_type: "code",
    redirect_uri: config.REDIRECT_URI,
  });
  const url = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${query.toString()}`;
  return (
    <div>
      <a href={url}>
        <button>Auth</button>
      </a>
    </div>
  );
};

export default Setup;
