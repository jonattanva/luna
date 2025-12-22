import { Button } from '../ui/button'
import { Sparkles, Plus } from 'lucide-react'
import { Prompt } from './prompt'

const SUGGESTED_PROMPTS = [
  'Create a login form with email and password',
  'Generate a contact form with name, email, and message',
  'Build a registration form for a fitness app',
]

export function Panel() {
  return (
    <>
      <div className="relative h-full min-h-0 flex-1">
        <div className="flex h-full flex-col items-center overflow-y-auto p-4 text-center sm:p-8">
          <div className="my-auto flex w-full max-w-md flex-col items-center">
            <div className="bg-primary/10 mb-4 flex size-12 items-center justify-center rounded-2xl sm:mb-6 sm:size-16">
              <Sparkles className="text-primary size-6 sm:size-8" />
            </div>
            <h2 className="mb-2 text-xl font-bold tracking-tight sm:text-2xl">
              Generate your form with AI
            </h2>
            <p className="text-muted-foreground mb-6 max-w-sm text-base leading-relaxed text-balance sm:mb-10 sm:text-lg">
              Describe the form you need in natural language, and I&apos;ll
              build it for you in seconds.
            </p>
            <div className="flex w-full flex-col gap-2">
              <p className="text-muted-foreground mb-2 text-left text-xs font-medium tracking-wider uppercase">
                Suggested prompts
              </p>
              {SUGGESTED_PROMPTS.map((prompt) => (
                <Button
                  key={prompt}
                  variant="outline"
                  className="h-auto justify-start py-2 text-left font-normal whitespace-normal sm:py-3"
                >
                  <Plus className="mr-2 size-4 shrink-0 opacity-50" />
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Prompt />
    </>
  )
}
