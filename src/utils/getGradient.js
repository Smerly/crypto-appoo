let width, height, gradient;
export function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(214,222,255,0)');
    gradient.addColorStop(0.01, 'rgba(214,222,255,0)');
    gradient.addColorStop(1, '#00ff5f');
  }

  return gradient;
}