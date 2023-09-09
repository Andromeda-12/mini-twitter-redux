import React, { ReactNode } from 'react';
import clsx from 'clsx';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../lib';

export interface Tab {
  title: string;
  value: string;
  content?: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: Tab[];
  currentTab: string;
  onValueChange?: (value: string) => void;
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    title: string;
  }
>(({ className, title, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'group duration-100',
      'rounded-xl px-[12px] py-[11px] h-[46px] w-full',
      'radix-state-active:bg-primary-dark radix-state-active:text-white radix-state-active:font-semibold',
      'outline-none focus:outline-none focus-visible:ring ring-primary ring-offset-2',
      className
    )}
    {...props}
  >
    <span className="text-base font-normal">{title}</span>
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const Tabs = ({
  className,
  tabs,
  currentTab,
  onValueChange,
}: TabsProps) => (
  <TabsPrimitive.Root
    value={currentTab}
    className={clsx('focus:outline-none', className)}
    onValueChange={onValueChange}
  >
    <TabsPrimitive.List className="focus:outline-none p-1 flex gap-1 w-full bg-gray rounded-xl">
      {tabs.map(({ title, value }) => (
        <TabsTrigger key={`tab-trigger-${value}`} value={value} title={title} />
      ))}
    </TabsPrimitive.List>

    {tabs.map(({ value, content }) => (
      <TabsPrimitive.Content
        key={`tab-content-${value}`}
        value={value}
        className="outline-none"
      >
        {content}
      </TabsPrimitive.Content>
    ))}
  </TabsPrimitive.Root>
);
