import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert, LoaderCircle } from 'lucide-react';
import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    user: User;
}

export default function Edit({ user }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: '',
        password_confirmation: '',
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('users.update', user.id));
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Users', href: `/users` },
                { title: 'Edit a User', href: `/users/${user.id}/edit` },
            ]}
        >
            <Head title="Update a User" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleUpdate} className="space-y-4">
                    {/* Display errors */}
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="destructive">
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle>Validation Errors</AlertTitle>
                            <AlertDescription>
                                <ul className="ml-5 list-disc space-y-1">
                                    {Object.entries(errors).map(([key, message]) => (
                                        <li key={key}>{message as string}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="gap-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter full name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                    </div>

                    <div className="gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>

                    <div className="gap-1.5">
                        <Label htmlFor="password">New Password (optional)</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter new password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>

                    <div className="gap-1.5">
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            placeholder="Confirm password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                    </div>

                    <Button disabled={processing} type="submit">
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Submit
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
