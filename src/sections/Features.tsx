import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";

import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg';
import avater3 from '@/assets/images/avatar-florence-shaw.jpg';
import avater4 from '@/assets/images/avatar-owen-garcia.jpg';

import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where power meeds <span className="text-lime-400">simplicity</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard title="Real-time collaboration" description="Work together seamlessly with conflict free editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="Avatar 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image src={avater3} alt="Avatar 3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:bg-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image src={avater4} alt="Avater 4" className="transition duration-300 absolute size-full rounded-full opacity-0 group-hover:opacity-100" />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span key={i} className="inline-flex size-1.5 rounded-full bg-white"></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Interactive prototyping" description="Engage clients with prototypes that react to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">
                                We&apos;ve achieved{" "}
                                <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    <span>incredible</span>
                                    <video src={'/assets/gif-incredible.mp4'} autoPlay muted loop playsInline className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"></video>
                                </span> growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group">
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28 group-hover:outline outline-2 group-hover:outline-lime-400 transition-all duration-500 outline-transparent outline-offset-4 group-hover:translate-y-1">Shift</Key>
                            <Key className="group-hover:outline outline-2 group-hover:outline-lime-400 transition-all duration-500 outline-transparent outline-offset-4 group-hover:translate-y-1 delay-150">Alt</Key>
                            <Key className="group-hover:outline outline-2 group-hover:outline-lime-400 transition-all duration-500 outline-transparent outline-offset-4 group-hover:translate-y-1 delay-300">C</Key>
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map(feature => (
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
                            <span className="bg-lime-400  text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10037;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 
