# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1.  Task 1: create facility specific agent id's
    Ticket 1. Using facility specific agent id's: e
        Here, we need to have a separate bridge table which could be called facility_agent . This will have have the following columns among other 
        if required in future :
        facility_id foreign key 
        agent_id foreign key 
        id : this id will be created by facility when they associate for the first time  could be alphanumeric
        uniqueness constraint 1: (facility_id,agent_id) ( no duplicate entries for given combination of facility_id and agent_id);
        uniqueness constraint 2: (facility_id,id) ( no duplicate entries for given combination of facility_id and id);
        This way two facilities can have same id for "their" agent and it won't be a problem
    Ticket 2: Write Tests

    Estimate : 2 days: development, 2 days developer testing including writing tests, 1 day qa testing.

2. Task 2: 
     Ticket 1. 
        Write a backend read query , scan though all the shifts. Filter by given facility ids and time period.
        Expose an api (internal or external).
     Ticket 2.  
        Write tests.
    Estimate : 1.5 days: development, 1.5 day developer testing, 1 day qa testing.

3. generateReport
     This is a little more involved one, depends if 
      1.  Create a template table where we could store report templates. ( we might need separate template per facility if client insist on theirs own branding or custom report layout). We will save HTML templates references in the table. actual html files could be in an object 
      store like S3 , or pulled from a CMS if we have our own content team who change templates frequently.
      (Estimate 4 days if this kind of thing not already done in the current project)
      (2 Days)
      2. If we are using a single report template then problem becomes much easier. 
      3. Choosing and integrating a templating engine in backend:
        Using a templating engine like react pdf at backend.Doing a quick POC.
      (2 Days)
      4. Finally consuming the data given getShiftsByFacility api to fill up the placeholders in the template.
      (1 Day)
    Acceptance Criteria: The report should be generated within 4 seconds (or lesser depending upon product requirement) provided there are not more than 5000 shifts in a quarter.

     