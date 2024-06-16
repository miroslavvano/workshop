import ServiceWorkersTable from "../components/service-worker";
import WebWorkerComparisonTable from "../components/web-worker-table";

export const WebWorkers = () => {
  return (
    <>
      <h1>WebWorkers</h1>
      <WebWorkerComparisonTable />
      <ServiceWorkersTable />
    </>
  );
};
