import { PageTitle } from '@/shared/ui';
import { ViewerCard } from './ViewerCard';
import { ViewerPostList } from './ViewerPostList';

export const ProfilePageView = () => (
  <div>
    <PageTitle text="Мой профиль" className="mb-6" />

    <div className="flex flex-col gap-6 lg:flex-row">
      <ViewerCard />

      <h4 className="font-bold text-lg leading-6 md:hidden">Мои посты:</h4>

      <ViewerPostList />
    </div>
  </div>
);
