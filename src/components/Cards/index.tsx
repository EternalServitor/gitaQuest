import { PlusIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export default function ProductCard({ className, ...props }: CardProps) {
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
                <CardTitle>Hostels</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=' flex flex-1 items-center justify-center md:w-auto'>
                    <img
                        src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Photo by Drew Beamer"
                        className="rounded-md object-cover"
                    />
                </div>
                <CardDescription className="text-md font-semibold">Rs 1400</CardDescription>
                <CardDescription>Webcam is essential part of all online sessions which we conduct.</CardDescription>
            </CardContent>

            <CardFooter className="flex gap-2">
                <Button className="w-full">
                    Donate
                </Button>
                <Button className="w-full">
                    +1
                </Button>
                <Button className="w-full">
                    <PlusIcon />
                </Button>
            </CardFooter>
        </Card>
    )
}
