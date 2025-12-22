import { Google } from '../ui/icon'
import { TriangleAlert } from 'lucide-react'

export const Gemini3Flash = () => (
  <>
    <Google />
    <span>Gemini 3 Flash</span>
    <span className="sr-only">Gemini 3 Flash</span>
  </>
)

export const WithoutProvider = () => (
  <>
    <TriangleAlert />
    <span>Add AI provider</span>
    <span className="sr-only">Without AI provider</span>
  </>
)
