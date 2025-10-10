import { 
  type PersonSchema, 
  type WebSiteSchema, 
  type BlogSchema, 
  type ArticleSchema, 
  type BreadcrumbSchema 
} from '@/lib/schema'

interface SchemaProps {
  readonly schema: PersonSchema | WebSiteSchema | BlogSchema | ArticleSchema | BreadcrumbSchema
}

export function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0)
      }}
    />
  )
}