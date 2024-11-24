import { Link, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"
      >
        {/* <div className="grid gap-3">
          <Link to="/signup">Signup</Link>
          <Link to="/verify-email">Verify Email</Link>
          <Link to="/login">Login</Link>
        </div> */}

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

// <div
// className='min-h-screen bg-gradient-to-br
// from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'
// >
// <FloatingShape color='bg-green-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
// <FloatingShape color='bg-emerald-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
// <FloatingShape color='bg-lime-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

// <Routes>
//   <Route
//     path='/'
//     element={
//       <ProtectedRoute>
//         <DashboardPage />
//       </ProtectedRoute>
//     }
//   />
//   <Route
//     path='/signup'
//     element={
//       <RedirectAuthenticatedUser>
//         <SignUpPage />
//       </RedirectAuthenticatedUser>
//     }
//   />
//   <Route
//     path='/login'
//     element={
//       <RedirectAuthenticatedUser>
//         <LoginPage />
//       </RedirectAuthenticatedUser>
//     }
//   />
//   <Route path='/verify-email' element={<EmailVerificationPage />} />
//   <Route
//     path='/forgot-password'
//     element={
//       <RedirectAuthenticatedUser>
//         <ForgotPasswordPage />
//       </RedirectAuthenticatedUser>
//     }
//   />

//   <Route
//     path='/reset-password/:token'
//     element={
//       <RedirectAuthenticatedUser>
//         <ResetPasswordPage />
//       </RedirectAuthenticatedUser>
//     }
//   />
//   {/* catch all routes */}
//   <Route path='*' element={<Navigate to='/' replace />} />
// </Routes>
// <Toaster />
// </div>
