import { makeDecorator } from "@storybook/addons";
import { useRouter } from "next/router";

export default makeDecorator({
  name: "withDecoratorTest",
  parameterName: "decoratorTest",
  wrapper: function Wrapper(storyFn, context) {
    const router = useRouter();
    console.log(router.pathname);

    return storyFn(context)
  },
});
