import { data, type LoaderFunctionArgs } from "@remix-run/node";
import { z } from "zod";
import { resources } from "@/i18n/i18n";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  // `resources` is only available server-side, but TS doesn't know so we have
  // to assert it's not undefined here and assign it to another constant to
  // avoid TS errors below
  const languages = resources!;

  const lng = z
    .string()
    .refine((lng): lng is keyof typeof languages => Object.keys(languages).includes(lng))
    .parse(url.searchParams.get("lng"));

  const namespaces = languages[lng];

  const ns = z
    .string()
    .refine((ns): ns is keyof typeof namespaces => {
      return Object.keys(languages[lng]).includes(ns);
    })
    .parse(url.searchParams.get("ns"));

  return data(namespaces[ns]);
}
