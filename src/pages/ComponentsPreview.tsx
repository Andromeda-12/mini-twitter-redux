import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
  IconButton,
  Input,
  Progress,
} from '@/shared/ui';
import { Link } from 'react-router-dom';

export const ComponentsPreview = () => (
  <div className="flex flex-col items-center space-y-4 py-10">
    <Progress value={50} />

    <Link to="/sdfsf">test</Link>

    <div className="space-x-2">
      <IconButton iconName="burger" size="sm" />
      <IconButton iconName="burger" />
      <IconButton iconName="burger" size="lg" />
    </div>

    <div className="space-x-2">
      <IconButton iconName="burger" variant="outline" size="sm" />
      <IconButton iconName="burger" variant="outline" />
      <IconButton iconName="burger" variant="outline" size="lg" />
    </div>

    <div className="space-x-2">
      <IconButton iconName="burger" variant="ghost" size="sm" />
      <IconButton iconName="burger" variant="ghost" />
      <IconButton iconName="burger" variant="ghost" size="lg" />
    </div>

    <DropdownMenuPreview />
    <Buttons />
    <Inputs />
  </div>
);

const DropdownMenuPreview = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Dropw down</Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuItem>
        <div>test</div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <div>test</div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const Inputs = () => (
  <>
    <div className="space-x-2 flex">
      <Input startNode={<Icon iconName="error" />} />
      <Input endNode={<Icon iconName="error" />} />
      <Input endNode={<Button size="sm">Click me!</Button>} />
    </div>

    <div className="space-x-2 flex">
      <Input disabled startNode={<Icon iconName="error" />} />
      <Input disabled endNode={<Icon iconName="eye" />} />
      <Input disabled endNode={<Button size="sm">Click me!</Button>} />
    </div>
  </>
);

const Buttons = () => (
  <>
    <div className="space-x-2">
      <Button size="sm">Button</Button>
      <Button>Button</Button>
      <Button size="lg">Button</Button>
    </div>

    <div className="space-x-2">
      <Button size="sm" disabled>
        Button
      </Button>
      <Button disabled>Button</Button>
      <Button size="lg" disabled>
        Button
      </Button>
    </div>

    <div className="space-x-2">
      <Button size="sm" disabled variant="outline">
        Button
      </Button>
      <Button disabled variant="outline">
        Button
      </Button>
      <Button size="lg" disabled variant="outline">
        Button
      </Button>
    </div>

    <div className="space-x-2">
      <Button size="sm" variant="ghost">
        Button
      </Button>
      <Button variant="ghost">Button</Button>
      <Button size="lg" variant="ghost">
        Button
      </Button>
    </div>

    <div className="space-x-2">
      <Button size="sm" variant="link">
        Button
      </Button>
      <Button variant="link">Button</Button>
      <Button size="lg" variant="link">
        Button
      </Button>
    </div>

    <div className="space-x-2">
      <Button size="sm" variant="outline">
        Button
      </Button>
      <Button variant="outline">Button</Button>
      <Button size="lg" variant="outline">
        Button
      </Button>
    </div>
  </>
);
