import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Box } from 'lucide-react'
import { ReactNode } from 'react'
import { header_font } from './fonts'

export default function Features() {
    return (
   
    <section className="py-16 md:py-32 dark:bg-transparent text-primary isolate" >
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className={`text-white text-balance text-4xl font-semibold lg:text-5xl ${header_font.className}`}>
                        Powered By Web3 Technology
                    </h2>
                    <p className="mt-4 text-white ">
                        Built on cutting-edge blockchain infrastructure for maximum security and transparency
                    </p>
                </div>

                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-4 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    
                    {/* Smart Contracts */}
                    <Card className="group border-0 bg-transparent shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <svg
                                    className="size-8"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 3v6.651l5.625 2.516z"></path>
                                    <path d="m12 3-5.625 9.166L12 9.653z"></path>
                                    <path d="M12 16.478V21l5.625-7.784z"></path>
                                    <path d="M12 21v-4.522l-5.625-3.262z"></path>
                                    <path d="m12 15.43 5.625-3.263L12 9.652z"></path>
                                    <path d="M6.375 12.167 12 15.43V9.652z"></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="m12 15.43-5.625-3.263L12 3l5.624 9.166zm-5.252-3.528 5.161-8.41v6.114zm-.077.229 5.238-2.327v5.364zm5.418-2.327v5.364l5.234-3.037zm0-.198 5.161 2.296-5.161-8.41z"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="m12 16.406-5.625-3.195L12 21l5.624-7.79zm-4.995-2.633 4.904 2.79v4.005zm5.084 2.79v4.005l4.905-6.795z"
                                    ></path>
                                </svg>
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Smart Contracts</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">ERC-1155 tokens represent verified coffee batches</p>
                        </CardContent>
                    </Card>

                    {/* Chainlink Oracles */}
                    <Card className="group border-0 bg-transparent shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <svg
                                    className="size-6"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    height="48"
                                    width="48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0L9.798 1.266l-6 3.468L1.596 6v12l2.202 1.266 6.055 3.468L12.055 24l2.202-1.266 5.945-3.468L22.404 18V6l-2.202-1.266-6-3.468zM6 15.468V8.532l6-3.468 6 3.468v6.936l-6 3.468z"></path>
                                </svg>
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Chainlink Oracles</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">
                                Decentralized verification of coffee inventory through Chainlink Functions
                            </p>
                        </CardContent>
                    </Card>

                    {/* IPFS Storage */}
                    <Card className="group border-0 bg-transparent shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Box className="size-6" />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">IPFS Storage</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">
                                Immutable metadata storage via Pinata for complete transparency.
                            </p>
                        </CardContent>
                    </Card>

                    {/* ZK Privacy */}
                    <Card className="group border-0 bg-transparent shadow-none">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <svg
                                    stroke="none"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    className="size-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                                </svg>
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">ZK Privacy</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">
                                Zero-Knowledge proofs protect sensitive business data while maintaining transparency.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 group">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] transition-all duration-300 group-hover:bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)]"
    />
    <div className="bg-transparent absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
)
