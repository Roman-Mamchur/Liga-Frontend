import AuthModal from "@/components/Modal/AuthModal";
import RegisterForm from "@/components/Auth/RegisterForm";

const LoginModal = () => {
  return (
    <AuthModal>
      <div className="my-4 overflow-y-auto px-8">
        <RegisterForm />
      </div>
    </AuthModal>
  );
};

export default LoginModal;
