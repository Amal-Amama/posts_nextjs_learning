function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1 className="article_layout">Articles</h1>
      {children}
    </div>
  );
}

export default ArticleLayout;
