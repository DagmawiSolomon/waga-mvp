import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { SmartContract, Chainlink,  ZkProof, IPFS } from '@/components/logos'

export default function Features() {
    return (
        <section>
            <div className="py-32 relative">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center">
                
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">Powered By Web3 Technology</h2>
                        <p className="text-white mt-6">Built on cutting-edge blockchain infrastructure for maximum security and transparency.</p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                        <IntegrationCard
                            title="Smart Contracts"
                            description="ERC-1155 tokens represent verified coffee batches.">
                            <SmartContract />
                        </IntegrationCard>

                        <IntegrationCard
                            title="Chainlink Oracles"
                            description="Decentralized verification of coffee inventory through Chainlink Functions.">
                            <Chainlink />
                        </IntegrationCard>

                        <IntegrationCard
                            title="IPFS Storage"
                            description="Immutable metadata storage via Pinata for complete transparency.">
                            <IPFS />
                        </IntegrationCard>

                        <IntegrationCard
                            title="ZK Privacy"
                            description="Zero-Knowledge proofs protect sensitive business data while maintaining transparency.">
                            <ZkProof />
                        </IntegrationCard>

                       
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ title, description, children, link = 'https://github.com/meschacirung/cnblocks' }: { title: string; description: string; children: React.ReactNode; link?: string }) => {
    return (
        <Card className="p-6 bg-primary/5 border-none">
            <div className="relative">
                <div className="*:size-10">{children}</div>

                <div className="space-y-2 py-6">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-white/50 line-clamp-2 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6 border-t-white/20">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none">
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}