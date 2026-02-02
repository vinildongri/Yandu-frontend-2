import React from "react";
import Link from "next/link";
import {
   CheckCircle,
   ArrowRight,
   CreditCard,
   Landmark,
   Bitcoin,
   FileText,
   ShieldCheck,
   HelpCircle,
   Download
} from "lucide-react";

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
   <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#10b981] mb-2">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
         {title}
      </h2>
   </div>
);

const BillingPayments = () => {
   return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans pb-20">

         {/* ================= SECTION 1: HERO ================= */}
         <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

               <div className="max-w-2xl text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Finance Centre</span>
                     <div className="h-px w-12 bg-slate-700"></div>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                     Simple. Transparent. <br /><span className="text-[#10b981]">Secure.</span>
                  </h1>
                  <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                     Manage your milestones, invoices, and payment methods with bank-grade security and zero hidden fees.
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                     <div className="px-8 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-wider">
                        SSL ENCRYPTED
                     </div>
                     <Link
                        href="/contact"
                        className="px-8 py-3 bg-[#10b981] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#059669] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                     >
                        CONTACT BILLING
                     </Link>
                  </div>
               </div>

               {/* Visual: Credit Card Illustration */}
               <div className="hidden md:block relative z-10 scale-110">
                  {/* Floating Card 1 */}
                  <div className="absolute top-0 right-0 w-64 h-40 bg-slate-800 rounded-2xl border border-slate-600 transform rotate-12 opacity-60"></div>
                  {/* Main Card */}
                  <div className="relative w-64 h-40 bg-gradient-to-br from-[#10b981] to-emerald-900 rounded-2xl shadow-2xl border border-emerald-400/30 p-5 flex flex-col justify-between transform -rotate-6 transition-transform hover:rotate-0 duration-500">
                     <div className="flex justify-between items-start">
                        <div className="w-10 h-6 bg-yellow-400/80 rounded-md"></div>
                        <div className="text-white/50 text-xs font-mono">**** 4242</div>
                     </div>
                     <div>
                        <div className="text-white/70 text-[10px] uppercase mb-1">Card Holder</div>
                        <div className="text-white font-bold tracking-widest text-sm">YANDU CLIENT</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
         </div>


         {/* ================= SECTION 2: PAYMENT METHODS ================= */}
         <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <SectionHeader subtitle="Options" title="Accepted Methods" />

            {/* Method 1: Cards */}
            <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center text-center h-[300px] group relative overflow-hidden">
               <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <CreditCard size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Credit/Debit Cards</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We accept Visa, Mastercard, and Amex via our secure Stripe integration. Instant processing.
               </p>
            </div>

            {/* Method 2: Bank Transfer */}
            <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center text-center h-[300px] group relative overflow-hidden">
               <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Landmark size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Bank Transfer (ACH/Wire)</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Preferred for large projects ($5k+). Direct invoicing with NET-15 or NET-30 terms available for enterprise.
               </p>
            </div>

            {/* Method 3: Crypto/UPI */}
            <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center text-center h-[300px] group relative overflow-hidden">
               <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Bitcoin size={32} />
               </div>
               <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Crypto & UPI</h3>
               <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We support USDC/USDT transfers and local UPI payments for seamless international transactions.
               </p>
            </div>


            {/* ================= SECTION 3: STRUCTURE ================= */}
            <div className="col-span-1 md:col-span-3 mt-16">
               <div className="bg-[#f4f4f5] dark:bg-[#23262f] rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">

                  {/* Text Side */}
                  <div className="w-full md:w-1/2 z-10">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#10b981] mb-2 block">Workflow</span>
                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">How We Bill</h2>
                     <ul className="space-y-6">
                        <li className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                           <div>
                              <h4 className="font-bold text-slate-900 dark:text-white">The Deposit (30-50%)</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Secures your spot in our development queue and covers initial setup costs.</p>
                           </div>
                        </li>
                        <li className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                           <div>
                              <h4 className="font-bold text-slate-900 dark:text-white">Milestone Releases</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Payments released only after you approve key deliverables (e.g., Design Approval, Beta Launch).</p>
                           </div>
                        </li>
                        <li className="flex gap-4">
                           <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                           <div>
                              <h4 className="font-bold text-slate-900 dark:text-white">Final Handover</h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Remaining balance settled upon live deployment and full IP transfer.</p>
                           </div>
                        </li>
                     </ul>
                  </div>

                  {/* Visual Side: Invoice Mockup */}
                  <div className="w-full md:w-1/2 relative z-10 flex justify-center">
                     <div className="w-64 bg-white dark:bg-[#111318] rounded-xl shadow-2xl p-6 border border-slate-200 dark:border-slate-700 rotate-3 transition-transform hover:rotate-0 duration-500">
                        <div className="flex justify-between items-center mb-6">
                           <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                           <div className="text-xs font-bold text-slate-400">INVOICE #001</div>
                        </div>
                        <div className="space-y-3 mb-6">
                           <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                           <div className="h-2 w-1/2 bg-slate-100 dark:bg-slate-800 rounded"></div>
                           <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                        </div>
                        <div className="flex justify-between items-end pt-4 border-t border-slate-100 dark:border-slate-800">
                           <div className="text-xs text-slate-400">Total Due</div>
                           <div className="text-xl font-bold text-[#10b981]">$2,499.00</div>
                        </div>
                     </div>
                  </div>

                  {/* Background Decor */}
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#10b981] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
               </div>
            </div>


            {/* ================= SECTION 4: FAQ Grid ================= */}
            <SectionHeader subtitle="Support" title="Common Questions" />

            <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm transition-all duration-300 rounded-[2rem] p-8 col-span-1 md:col-span-3">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                     <HelpCircle className="text-[#10b981] shrink-0" />
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Can I pay in installments?</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Yes. Most projects are split into 3 payments (30% / 30% / 40%) to aid your cash flow.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <ShieldCheck className="text-[#10b981] shrink-0" />
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Is my payment info secure?</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Absolutely. We use Stripe and PayPal, which are PCI-DSS compliant. We never store card details.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <FileText className="text-[#10b981] shrink-0" />
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Do you provide tax invoices?</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Yes, fully compliant GST/VAT invoices are automatically generated and emailed upon payment.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <CheckCircle className="text-[#10b981] shrink-0" />
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">What is the refund policy?</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Refunds are available for unstarted milestones. Once a milestone is approved, it is non-refundable.</p>
                     </div>
                  </div>
               </div>
            </div>


            {/* ================= SECTION 5: FINAL CTA ================= */}
            <div className="col-span-1 md:col-span-3 mt-16 mb-10 text-center">
               <div className="bg-[#111318] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800 max-w-4xl mx-auto">
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#10b981] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
                  <div className="relative z-10">
                     <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Need a custom quote?</h2>
                     <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                        Contact our billing team for enterprise agreements or custom payment plans.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                           href="mailto:vinilwork88@gmail.com"
                           className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-full font-bold"
                        >
                           Contact Support
                        </Link>

                        <Link
                           href="/contact"
                           className="bg-emerald-600 hover:bg-emerald-500 px-10 py-4 rounded-full font-bold flex items-center gap-2 justify-center"
                        >
                           Start a Project <ArrowRight size={18} />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
}

export default BillingPayments;