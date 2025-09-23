import { lazy, Suspense } from "react";

const Home = lazy(() => import("./home.jsx"));
const Services = lazy(() => import("./Services.jsx"));
const MyProjects = lazy(() => import("./MyProjects.jsx"));
const Contact = lazy(() => import("./contact.jsx"));
const Footer = lazy(() => import("./Footer.jsx"));
const Nav = lazy(() => import("./nav.jsx"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Nav />
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="myprojects"><MyProjects /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </Suspense>
  );
}
