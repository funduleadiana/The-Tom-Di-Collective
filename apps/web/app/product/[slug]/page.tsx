interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Product Page</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Product: {params.slug}
        </p>
      </div>
    </div>
  );
}
