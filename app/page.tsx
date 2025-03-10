'use client';

import { useRouter } from 'next/navigation';
import { Brain, ChevronRight, Shield, FileText, Users } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <Brain className="text-indigo-600" size={24} />
          <h1 className="text-xl font-bold text-gray-900">MindWell</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600">How It Works</a>
          <a href="#benefits" className="text-gray-600 hover:text-indigo-600">Benefits</a>
          <a href="#experts" className="text-gray-600 hover:text-indigo-600">Experts</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">About Us</a>
        </nav>
        {/* <div className="flex gap-4">
          <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
            Log In
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Sign Up
          </button>
        </div> */}
      </header>

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-800 text-white py-16 px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-36 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl font-bold">Early Detection for Better Mental Health</h2>
              <p className="text-xl">
                Our AI-powered tool helps identify early signs of depression, enabling timely intervention and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push('/assessment')}
                  className="rounded-full bg-white text-indigo-600 transition-colors flex items-center justify-center hover:bg-gray-100 h-12 px-6 font-medium"
                >
                  Take Assessment <ChevronRight size={18} className="ml-2" />
                </button>
                <a
                  href="https://www.nih.gov/news-events/nih-research-matters/research-context-treating-depression"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-solid border-white text-white transition-colors flex items-center justify-center hover:bg-white/10 h-12 px-6 font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6">
              <Brain className="text-white" size={240} />
              <p className="font-poppins italic">
                &quot;Even in the darkest moments, <br />
                your mind has the strength to heal.<br />
                Keep going<br />
                light will find its way back.&quot;<br />
                — MindWell
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How MindWell Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Complete Assessment</h3>
                <p className="text-gray-600">
                  Answer our clinically-validated questionnaire designed to capture key behavioral and emotional patterns.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Analysis</h3>
                <p className="text-gray-600">
                  Our machine learning algorithm analyzes your responses and compares them with established clinical indicators.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Personalized Insights</h3>
                <p className="text-gray-600">
                  Receive a detailed report with your risk assessment and personalized recommendations for mental wellness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-16 px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Benefits of Early Detection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <Shield className="text-indigo-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Preventive Care</h3>
                <p className="text-gray-600">
                  Identify risk factors before they develop into clinical depression.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileText className="text-indigo-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Evidence-Based</h3>
                <p className="text-gray-600">
                  Our algorithms are trained on clinical data and validated by mental health professionals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="text-indigo-600 mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Support Network</h3>
                <p className="text-gray-600">
                  Connect with resources and professionals based on your assessment results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center p-6">
                    <span className="text-indigo-600 font-bold">67.7%</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Accuracy</h3>
                <p className="text-gray-600">
                  Our prediction model achieves high accuracy compared to clinical diagnoses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-8 bg-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to prioritize your mental health?</h2>
            <p className="text-xl mb-8">
              Take the first step toward understanding your mental health status and accessing personalized support.
            </p>
            <button
              onClick={() => router.push('/assessment')}
              className="rounded-full bg-white text-blue-800 transition-colors flex items-center justify-center hover:bg-gray-100 h-12 px-8 font-medium mx-auto w-fit text-lg"
            >
              Start Free Assessment
            </button>
            <p className="mt-4 text-indigo-200">
              No registration required. Your data is private and secure.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section id="experts" className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Experts Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  &quot;The sooner you seek help for depression, the better the outcome. Early intervention is key to recovery.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-200 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. David Burns</h4>
                    <p className="text-gray-500 text-sm">Psychiatrist</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  &quot;Depression is treatable, and early treatment leads to faster healing. Don&apos;t wait—reach out and reclaim your life.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-200 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Kay Redfield Jamison</h4>
                    <p className="text-gray-500 text-sm">Psychologist</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  &quot;Healing begins the moment you acknowledge your pain and seek support. Early intervention changes the course of depression.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-200 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Aaron Beck</h4>
                    <p className="text-gray-500 text-sm">Psychiatrist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="p-6 bg-gray-800 text-gray-300">
        <div className="max-w-6xl mx-auto gap-8 md:grid-cols-4 flex justify-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="text-indigo-400" size={24} />
              <h3 className="text-3xl font-bold text-white justify-center">MindWell</h3>
            </div>
            <p className="text-gray-400 justify-center text-center">
              Advancing mental health <br />through technology and compassion.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 MindWell. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This tool is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="mt-2">
            Contact: support@mindwell.com
          </p>
        </div>
      </footer>
    </div>
  );
}