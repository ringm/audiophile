import About from "@/root/components/shared/About";

export function BasicLayout(props) {

  const {
    children,
    device } = props;

  return (
    <>
      {children}
      <About device={device} />
    </>
  )
}