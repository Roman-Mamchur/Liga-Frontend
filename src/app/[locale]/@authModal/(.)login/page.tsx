import AuthModal from "@/components/Modal/AuthModal";
import LoginForm from "@/components/Auth/LoginForm";

const LoginModal = () => {
  return (
    <AuthModal>
      <div className="my-4 overflow-y-auto px-8">
        <LoginForm />
      </div>
    </AuthModal>
  );
};

export default LoginModal;
