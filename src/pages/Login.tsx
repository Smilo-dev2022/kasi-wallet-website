import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setTimeout(() => {
			toast({ title: 'Coming soon', description: 'Secure login and transactions will be available soon on iKasi Wallet.' });
			setIsSubmitting(false);
		}, 600);
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-24">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl">Login to iKasi Wallet</CardTitle>
					<CardDescription>Access your account to view and perform transactions.</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={onSubmit} className="space-y-4">
						<div>
							<Label htmlFor="email">Email or Phone</Label>
							<Input id="email" name="email" placeholder="you@example.com" required />
						</div>
						<div>
							<Label htmlFor="password">Password / PIN</Label>
							<Input id="password" name="password" type="password" required />
						</div>
						<Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
							{isSubmitting ? 'Signing in…' : 'Sign In'}
						</Button>
					</form>
					<div className="mt-4 text-sm text-center text-gray-600">
						<span className="mr-2">Don’t have an account?</span>
						<Link to="/" className="text-orange-600 hover:underline">Join waitlist</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Login;

