import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert, LoaderCircle } from 'lucide-react';
import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface Props {
    product: Product;
}

export default function Edit({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        price: product.price,
        description: product.description,
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(data);
        put(route('products.update', product.id));
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Products', href: `/products` },
                { title: 'Edit a Product', href: `/products/${product.id}/edit` },
            ]}
        >
            <Head title="Update a Product" />
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
