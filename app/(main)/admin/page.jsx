import { getPendingDoctors, getPendingPayouts, getVerifiedDoctors } from '@/actions/admin';
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { VerifiedDoctors } from './_components/verified-doctors';
import { PendingDoctors } from './_components/pending-doctors';
import { PendingPayouts } from './_components/pending-payouts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const AdminPage = async () => {
    const [pendingRes, verifiedRes, payoutsRes] = await Promise.allSettled([
        getPendingDoctors(),
        getVerifiedDoctors(),
        getPendingPayouts(),
    ]);

    const pendingDoctorsData =
        pendingRes.status === 'fulfilled' ? pendingRes.value : { doctors: [] };
    const verifiedDoctorsData =
        verifiedRes.status === 'fulfilled' ? verifiedRes.value : { doctors: [] };
    const pendingPayoutsData =
        payoutsRes.status === 'fulfilled' ? payoutsRes.value : { payouts: [] };

    const fetchErrors = [];
    if (pendingRes.status === 'rejected') {
        fetchErrors.push('Pending doctors could not be loaded.');
    }
    if (verifiedRes.status === 'rejected') {
        fetchErrors.push('Verified doctors could not be loaded.');
    }
    if (payoutsRes.status === 'rejected') {
        fetchErrors.push('Pending payouts could not be loaded.');
    }

    return (
        <>
            {fetchErrors.length > 0 && (
                <div className="mb-6 space-y-2">
                    {fetchErrors.map((msg) => (
                        <Alert key={msg} variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Something went wrong</AlertTitle>
                            <AlertDescription>{msg}</AlertDescription>
                        </Alert>
                    ))}
                </div>
            )}

            <TabsContent value="pending" className="border-none p-0">
                <PendingDoctors doctors={pendingDoctorsData.doctors || []} />
            </TabsContent>
            <TabsContent value="doctors" className="border-none p-0">
                <VerifiedDoctors doctors={verifiedDoctorsData.doctors || []} />
            </TabsContent>
            <TabsContent value="payouts" className="border-none p-0">
                <PendingPayouts payouts={pendingPayoutsData.payouts || []} />
            </TabsContent>
        </>
    )
}

export default AdminPage