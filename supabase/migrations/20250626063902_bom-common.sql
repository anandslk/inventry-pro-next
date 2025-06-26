
-- BOM (Bill of Materials) table with no restrictions
CREATE TABLE bom (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    data jsonb,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);