export const formatSalary = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export const formatTenure = (hireDate: string): string => {
  const ms  = Date.now() - new Date(hireDate).getTime();
  const yrs = Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000));
  const mos = Math.floor(
    (ms % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000)
  );
  if (yrs === 0) return `${mos}mo`;
  return mos > 0 ? `${yrs}y ${mos}mo` : `${yrs}y`;
};

export const getInitials = (firstName: string, lastName: string): string =>
  `${firstName[0]}${lastName[0]}`.toUpperCase();

export const formatDate = (dateStr: string): string =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
