import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
	const [consent, setConsent] = useState(false);
	const [state, handleSubmit] = useForm('mldnlowg');
	const { toast } = useToast();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!consent) {
			toast({
				title: 'Consent Required',
				description: 'Please agree to receive communication from Kasi Wallet.',
				variant: 'destructive',
			});
			return;
		}

		// Call the Formspree handleSubmit
		handleSubmit(e);
	};

	// Show success message
	if (state.succeeded) {
		return (
			<Card className='w-full max-w-2xl mx-auto'>
				<CardContent className='p-8 text-center'>
					<CheckCircle className='h-16 w-16 text-green-500 mx-auto mb-4' />
					<h3 className='text-2xl font-bold text-gray-800 mb-2'>Thank You!</h3>
					<p className='text-gray-600'>
						Your message has been sent successfully. We'll get back to you soon!
					</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className='w-full max-w-2xl mx-auto'>
			<CardContent>
				<form onSubmit={onSubmit} className='space-y-4'>
					<div>
						<Label htmlFor='fullName'>Full Name *</Label>
						<Input id='fullName' name='fullName' required />
						<ValidationError
							prefix='Full Name'
							field='fullName'
							errors={state.errors}
							className='text-red-500 text-sm mt-1'
						/>
					</div>

					<div>
						<Label htmlFor='phoneNumber'>Phone Number *</Label>
						<Input id='phoneNumber' name='phoneNumber' required />
						<ValidationError
							prefix='Phone Number'
							field='phoneNumber'
							errors={state.errors}
							className='text-red-500 text-sm mt-1'
						/>
					</div>

					<div>
						<Label htmlFor='email'>Email Address (optional)</Label>
						<Input id='email' type='email' name='email' />
						<ValidationError
							prefix='Email'
							field='email'
							errors={state.errors}
							className='text-red-500 text-sm mt-1'
						/>
					</div>

					<div>
						<Label htmlFor='userType'>I am a:</Label>
						<Select
							name='userType'
							onValueChange={(value) => {
								// Set the value in a hidden input for Formspree
								const hiddenInput = document.getElementById(
									'userType',
								) as HTMLInputElement;
								if (hiddenInput) {
									hiddenInput.value = value;
								}
							}}
						>
							<SelectTrigger>
								<SelectValue placeholder='Select one' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='customer'>Customer</SelectItem>
								<SelectItem value='merchant'>Merchant</SelectItem>
								<SelectItem value='agent'>Agent</SelectItem>
							</SelectContent>
						</Select>
						<input type='hidden' id='userType' name='userType' />
						<ValidationError
							prefix='User Type'
							field='userType'
							errors={state.errors}
							className='text-red-500 text-sm mt-1'
						/>
					</div>

					<div>
						<Label htmlFor='message'>Message</Label>
						<Textarea id='message' name='message' rows={4} />
						<ValidationError
							prefix='Message'
							field='message'
							errors={state.errors}
							className='text-red-500 text-sm mt-1'
						/>
					</div>

					<div className='flex items-center space-x-2'>
						<Checkbox
							id='consent'
							checked={consent}
							onCheckedChange={(checked) => setConsent(checked as boolean)}
						/>
						<Label htmlFor='consent' className='text-sm'>
							I agree to receive communication from Kasi Wallet.
						</Label>
					</div>

					{state.errors && Object.keys(state.errors).length > 0 && (
						<div className='flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-md'>
							<AlertCircle className='h-4 w-4 text-red-500' />
							<span className='text-red-700 text-sm'>
								Please fix the errors above and try again.
							</span>
						</div>
					)}

					<Button
						type='submit'
						className='w-full bg-orange-500 hover:bg-orange-600'
						disabled={state.submitting}
					>
						{state.submitting ? 'Sending...' : 'Submit'}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

export default ContactForm;
