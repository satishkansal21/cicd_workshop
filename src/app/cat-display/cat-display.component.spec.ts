import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { fireEvent, render, screen } from '@testing-library/angular';
import { createCat } from '../../test-utils/cat-factory';
import { createUser } from '../../test-utils/user-factory';
import { CatService } from '../cat.service';
import { UserService } from '../user.service';
import { Cat } from '../models/cat';
import { User } from '../models/user';

import { CatDisplayComponent } from './cat-display.component';
import { CatDisplayModule } from './cat-display.module';

interface SetupParams {
  catServiceData: {
    currentCat: Cat
  };
  userServiceData: {
    currentUser?: User
  };
}

describe('CatDisplayComponent', () => {
  const createSetupParams = (partial: Partial<SetupParams> = {}): SetupParams => ({
    catServiceData: {
      currentCat: createCat()
    },
    userServiceData: {
      currentUser: createUser()
    },
    ...partial
  });

  const setup = async({ catServiceData, userServiceData }: SetupParams = createSetupParams()) => {
    const { currentCat } = catServiceData;
    const catService: Spy<CatService> = createSpyFromClass(CatService);
    catService.getCurrentCat.nextWith(currentCat);
    catService.getAnotherCat.nextWith(currentCat);

    const { currentUser } = userServiceData;
    const userService: Spy<UserService> = createSpyFromClass(UserService);
    userService.getCurrentUser.nextWith(userServiceData.currentUser);
    
    const renderOptions = {
      imports: [    
        CatDisplayModule,
      ],
      excludeComponentDeclaration: true,
      providers: [
        {
          provide: CatService,
          useValue: catService
        },
        {
          provide: UserService,
          useValue: userService
        }
      ],
    };

    const { fixture } = await render(CatDisplayComponent, renderOptions);
    const component = fixture.componentInstance;

    return {
      fixture,
      component,
      catService,
      userService,
      currentCat,
      currentUser
    }
  }

  it('should create', async() => {
    const { component } = await setup();
    expect(component).toBeTruthy();
  });

  it('shows login when user is undefined', async() => {
    const votes = 3;
    const id = 1;
    const name = 'Simon';
    const currentCat = createCat({ 
      id,
      names: [
        {
          name,
          votes
        }
    ]});

    const expectedCat = {
      ...currentCat,
      names: [
        {name, votes: votes + 1}
      ]
    }

    const catServiceData = { currentCat };
    const setupParams = createSetupParams({ catServiceData });
    const { userService, catService} = await setup(setupParams);

    const voteButton = screen.getByTestId('CatDisplay_Vote_Button_1');
    fireEvent.click(voteButton);

    expect(userService.updateUserVotes).toHaveBeenCalledWith(id);
    expect(userService.updateUserVotes).toHaveBeenCalledTimes(1);

    expect(catService.updateCurrentCat).toHaveBeenCalledWith(expectedCat);
    expect(catService.updateCurrentCat).toHaveBeenCalledTimes(1);
  });
});
