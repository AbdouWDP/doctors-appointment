import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useData } from "@/store";

function GroupHeader({ label }) {
  const { page, maxItems, setPage, setNextPage, setPrevPage } = useData();

  return (
    <div className="flex items-center justify-between px-1">
      <span className="text-xs font-medium tracking-wide text-muted-foreground">
        {label}
      </span>
      <div>
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPrevPage()}
                  href="#appointments-rows"
                />
              </PaginationItem>
            )}

            {Array.from({ length: maxItems }, (_, i) => i + 1).map((item) => (
              <PaginationItem key={item}>
                <PaginationLink
                  className="rounded-md"
                  isActive={item === page}
                  onClick={() => setPage(item)}
                  href="#appointments-rows"
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}

            {page < maxItems && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => setNextPage()}
                  href="#appointments-rows"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export { GroupHeader };
