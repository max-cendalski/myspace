import React from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Notes from '../components/Notes/Notes';
import MySpaceDashboard from '../components/MySpaceDashboard';
import NotFoundPage from '../components/NotFoundPage';
import AddNotePage from '../components/Notes/AddNotePage';
import AddIdeaPage from '../components/QuotesIdeas/AddIdeaPage';
import AddQuotePage from '../components/QuotesIdeas/AddQuotePage';
import EditNotePage from '../components/Notes/EditNotePage';
import QuotesIdeas from '../components/QuotesIdeas/QuotesIdeas';
import Games from '../components/Games/Games';
import Code from '../components/Code/Code';


export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={MySpaceDashboard} exact={true} />
        <Route path="/notes" component={Notes} />
        <Route path="/createnote" component={AddNotePage} />
        <Route path="/createidea" component={AddIdeaPage} />
        <Route path="/createquote" component={AddQuotePage} />
        <Route path="/editnote/:id" component={EditNotePage} />
        <Route path="/quotesideas" component={QuotesIdeas} />
        <Route path="/games" component={Games} />
        <Route path="/code" component={Code} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;


