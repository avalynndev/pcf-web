"use client";
import { useState } from "react";
import { formatDate } from "~/lib/utils";
import { api } from "~/trpc/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { HeartIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";
import { Input } from "./ui/input";

interface PostItem {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

function PostComponent({ post }: { post: PostItem }) {
  const copyLinkToClipboard = async () => {
    const url = window.location.origin;
    const link = `${url}`;

    await navigator.clipboard.writeText(link);
  };

  return (
    <div
      key={post.id}
      className="w-full rounded-xl border p-6 shadow-md transition hover:shadow-lg md:p-8"
    >
      <div className="mb-2 flex items-center">
        <div className="inline-block w-full whitespace-pre-wrap break-words text-left leading-[1.3] opacity-80">
          {post.title}
        </div>
      </div>

      <div className="text-sm italic text-gray-500">{post.content}</div>
      <div className="mb-4 mt-4 text-xs">
        <div className="flex items-center justify-between">
          <div className="mt-2 text-xs opacity-40">
            {formatDate(post.createdAt)}
          </div>

          <div className="flex items-center gap-2">
            <Button disabled variant="outline" size="icon">
              <HeartIcon className="h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button disabled variant="outline" size="icon">
                  <PaperPlaneIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-[190px] rounded-2xl bg-background p-0 shadow-xl dark:bg-[#181818]"
              >
                <DropdownMenuItem
                  onClick={copyLinkToClipboard}
                  className="cursor-pointer select-none px-4 py-3 text-[15px] font-semibold tracking-normal focus:bg-transparent active:bg-primary-foreground"
                >
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-0 h-[1.2px]" />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Post() {
  const [posts] = api.post.getPosts.useSuspenseQuery<PostItem[]>();
  const [searchTerm, setSearchTerm] = useState("");

  if (!posts) return <div>None Found</div>;

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mx-auto w-full max-w-6xl p-8">
      <div className="mb-8 flex items-center justify-center">
        <Input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
          className="w-full max-w-3xl rounded-md border p-4 text-sm shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
