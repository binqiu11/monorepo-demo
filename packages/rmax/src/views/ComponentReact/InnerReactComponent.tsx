import ReactDom from "react-dom";

export interface InnerReactComponentProps {
  title?: string;
}

function InnerReactComponent({ title }: InnerReactComponentProps) {
  return (
    <div>
      {title ? <div>{title}</div> : null}
      <div>RMax React Component Test 4</div>
    </div>
  );
}

export function renderReactComponent(root: HTMLElement, props: InnerReactComponentProps) {
  ReactDom.render(<InnerReactComponent {...props} />, root);
}
