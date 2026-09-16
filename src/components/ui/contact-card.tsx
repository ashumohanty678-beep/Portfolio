import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
	visual?: React.ReactNode;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	visual,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'relative grid h-full w-full rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 md:grid-cols-2 lg:grid-cols-3',
				'bg-gradient-to-br from-[#0c0a1a]/85 via-[#100d22]/75 to-[#080614]/90',
				'border border-white/10 hover:border-purple-500/25 backdrop-blur-xl',
				'shadow-[0_16px_48px_rgba(0,0,0,0.45),0_0_40px_rgba(112,66,248,0.06)]',
				className,
			)}
			{...props}
		>
			{/* Subtle top glowing ambient beam blending emerald and purple */}
			<div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/60 via-purple-400/40 to-transparent pointer-events-none z-20" />

			{/* Soft atmospheric radial glows inside the glass card */}
			<div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
			<div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

			<div className="relative z-10 flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-6 px-5 py-8 sm:p-8 md:p-10 flex flex-col justify-between">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl font-hn text-white tracking-tight">
							{title}
						</h1>
						<p className="text-neutral-300/80 max-w-xl text-sm md:text-base leading-relaxed font-sans">
							{description}
						</p>
						<div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-2">
							{contactInfo?.map((info, index) => (
								<ContactInfo key={index} {...info} />
							))}
						</div>
					</div>
					{visual && (
						<div className="pt-4 flex items-center justify-center sm:justify-start">
							{visual}
						</div>
					)}
				</div>
			</div>
			<div
				className={cn(
					'relative z-10 flex h-full w-full items-center p-6 sm:p-8 md:p-9 md:col-span-1',
					'bg-gradient-to-b from-[#0a0818]/60 to-[#080614]/80 backdrop-blur-xl',
					'border-t md:border-t-0 md:border-l border-white/[0.08] dark:border-purple-500/15',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div
			className={cn(
				'flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-purple-500/20 backdrop-blur-sm transition-all duration-200 group shadow-sm',
				className
			)}
			{...props}
		>
			<div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.15)] group-hover:scale-105 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/30 transition-all duration-200">
				<Icon className="h-5 w-5" />
			</div>
			<div className="min-w-0 flex-1">
				<p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-medium">{label}</p>
				<p className="text-xs sm:text-sm font-sans font-medium text-white group-hover:text-emerald-300 transition-colors truncate">{value}</p>
			</div>
		</div>
	);
}

export default ContactCard;

