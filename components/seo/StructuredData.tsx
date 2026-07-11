type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * JSON-LD script tag. Uses a stable stringify so crawlers receive valid schema.
 * Prefer one script per schema graph for clarity and debugging in rich results.
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}
