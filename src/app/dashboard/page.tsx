'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Inquiry {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  pathway: string;
  message: string;
}

export default function DashboardPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInquiries() {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setInquiries(data || []);
      }
      setLoading(false);
    }

    fetchInquiries();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard CRM - Inquiries</h1>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {inquiries.length} Demandes
        </span>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500 text-xl">Chargement des données...</div>
      ) : (
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-4 px-6 font-bold">Date</th>
                  <th className="py-4 px-6 font-bold">Nom</th>
                  <th className="py-4 px-6 font-bold">Email</th>
                  <th className="py-4 px-6 font-bold">Parcours</th>
                  <th className="py-4 px-6 font-bold">Message</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-6">{new Date(inquiry.created_at).toLocaleDateString()}</td>
                    <td className="py-4 px-6 font-bold">{inquiry.full_name}</td>
                    <td className="py-4 px-6">{inquiry.email}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        inquiry.pathway === 'emploi' ? 'bg-blue-100 text-blue-700' :
                        inquiry.pathway === 'ausbildung' ? 'bg-green-100 text-green-700' :
                        inquiry.pathway === 'etudes' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {inquiry.pathway}
                      </span>
                    </td>
                    <td className="py-4 px-6 truncate max-w-xs">{inquiry.message}</td>
                  </tr>
                ))}
                {inquiries.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-500 italic">Aucune demande trouvée.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
