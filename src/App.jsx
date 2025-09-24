import { lazy, Suspense } from "react";

const Nav = lazy(() => import("./nav.jsx"));
const Home = lazy(() => import("./home.jsx"));
const Services = lazy(() => import("./Services.jsx"));
const MyProjects = lazy(() => import("./MyProjects.jsx"));
const Contact = lazy(() => import("./contact.jsx"));
const Footer = lazy(() => import("./Footer.jsx"));

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="myprojects"><MyProjects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </Suspense>
  );
}
