import config from "@/config/api.config";
import Steps from "@/components/Steps";
import { testDBConnection } from "@/utils/requests";

const Setup = async () => {
  const isDatabaseAvailable = await testDBConnection();
 
  return (
    <div className="container mx-auto mt-10">
      <Steps config={config} isDatabaseAvailable={isDatabaseAvailable} />
    </div>
  );
};

export default Setup;
