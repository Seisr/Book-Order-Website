import { useParams } from "react-router-dom";

// hock to reload a component on param change
function withParamReload(WrappedComponent, paramName) {
  let params = useParams;
  
  return (
    <WrappedComponent key={params[paramName]} />
  );
};

export default withParamReload;