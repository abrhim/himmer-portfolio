import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, tools I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="No one has ever really asked me about these things, but I thought it would be nice, if not just for myself, to keep inventory of my tools."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 23GB RAM (2021)" href="https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-black-apple-m3-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb">
            I was using a 2018 Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations. I'm eyeing the M3 MAX for my next machine.
          </Tool>
          <Tool title={`LG UltraWide 34" Display`} href="https://www.amazon.com/LG-34WQ650-W-Inch-DisplayHDR-Adjustable/dp/B09YVVG3SW/ref=sr_1_4?crid=DFV7WEYED2O&keywords=lg+37+inch+ultrawide+monitor+usb+c&qid=1704520125&sprefix=lg+37+inch+ultrawide+monitor+usbc%2Caps%2C101&sr=8-4&ufe=app_do%3Aamzn1.fos.c3015c4a-46bb-44b9-81a4-dc28e6d374b3">
            Nothing too special, it's super big, curved, and I can have my browser on one side and my editor on the other. I recommend the idea of a curved display, my next one will probably be even bigger.
          </Tool>
          <Tool title="Apple Magic Trackpad" href="https://www.apple.com/shop/product/MK2D3AM/A/magic-trackpad-white-multi-touch-surface">
            Something about all the gestures makes me feel like a wizard with
            special powers. I really like feeling like a wizard with special
            powers. And it bothers my brother to no end, so I can't really stop now.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code" href="https://code.visualstudio.com/">
            I don’t care if it’s missing all of the fancy IDE features everyone
            else relies on, VS Code is still the best text editor ever
            made.
          </Tool>
          <Tool title="Terminal">
            All the peeps are using iTerm2, but vanilla Terminal is working for me just fine.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma" href="https://www.figma.com/">
            Internally designers and frontend folks at Adobe ditched XD for Figma back in 2019. It's just a whole lot better in every way. It's a bummer the merger didn't go through. 
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Reflect" href="https://reflect.app">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="Block My Time">
            Blocking my day into time chunks gives a start and end to a specific purpose that I don't deviate from. I have ADHD (or at least I act like it) and just focusing with my head down can be hard unless I declare to myself what this time is purposed for. I made this app myself and I'm still working out the kinks, but I think real soon it will be in a shareable state and will make a signficant impact on my day. 
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Around the house">
          <Tool title="Southwire 12/14 Pliers" href="https://www.southwire.com/tools-equipment/cable-preparation-termination/snm1214hd-hd-nm-wire-stripper-12-2-14-2/p/65028240">
            I've seen quite a few pliers out there, but right now this is my favorite for working with 12 or 14 gauge romex. It strips the sheathing perfectly and has a perfectly grippy end for twisting copper.
          </Tool>
          <Tool title="Milwaukee Fuel Surge 18V Impact Driver" href="https://www.milwaukeetool.com/Products/2760-20">
            I love me a good impact driver and this is the best. Milwaukee makes great electric tools and they did a great job on their hydraulic brushless impact driver. I can't get over how smooth of a drive it has .
          </Tool>
      
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
