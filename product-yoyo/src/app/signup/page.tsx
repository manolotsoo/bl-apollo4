import { SignUp } from "@/components/signup";
import ProductLayout from "@/layouts/productLayout";

export default function SignUpPage() {
  return (
    <ProductLayout>
      <div className="flex flex-row justify-center h-screen items-center">
        <SignUp />
      </div>
    </ProductLayout>
  );
}
