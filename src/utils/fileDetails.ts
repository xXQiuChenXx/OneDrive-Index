export const formatFileSize = function (bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024; // 1kb = 1024 bytes
  const DECIMALS = 2; // two decimal places

  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(DECIMALS)) + " " + sizes[i]
  );
};

export const formatDate = function (datetime: string) {
  const date = new Date(datetime);

  return date.toLocaleString("en-MY", {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: "Asia/Singapore",
  });
};
