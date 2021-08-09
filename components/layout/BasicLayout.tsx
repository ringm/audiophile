import About from "@/root/components/shared/About";
import { ReactNode } from "react";

interface Props {
  device: string,
  children?: ReactNode
}

export const BasicLayout: React.FC<Props> = (props) => {

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