import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert, LoaderCircle } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'Create Products',
        href: '/products/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(data);
        post(route('products.store'));
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a Product" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        <Label htmlFor="product name">Name</Label>
                        <Input placeholder="Enter product name" value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="product price">Price</Label>
                        <Input placeholder="Enter product price" value={data.price} onChange={(e) => setData('price', e.target.value)}></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="product description">Description</Label>
                        <Textarea
                            placeholder="Enter product description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        ></Textarea>
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
