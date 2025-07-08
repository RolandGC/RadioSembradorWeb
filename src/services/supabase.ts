/// supabase.js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

export async function insertData(table, data) {
    const { error } = await supabase.from(table).insert(data);
    return !error;
}

export const updateData = async (table, id, data) => {
    const { error } = await supabase.from(table).update(data).eq('id', id);
    return !error;
};
