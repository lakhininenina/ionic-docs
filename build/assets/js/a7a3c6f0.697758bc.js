(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[25743],{97838:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return l},default:function(){return p}});var a=n(22122),i=n(19756),s=(n(67294),n(3905)),o={},r={unversionedId:"angular/testing",id:"angular/testing",isDocsHomePage:!1,title:"Testing",description:"When an @ionic/angular application is generated using the Ionic CLI, it is automatically set up for unit testing and end-to-end testing of the application. This is the same setup that is used by the Angular CLI. Refer to the Angular Testing Guide for detailed information on testing Angular applications.",source:"@site/docs/angular/testing.md",sourceDirName:"angular",slug:"/angular/testing",permalink:"/docs/angular/testing",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/angular/testing.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Platform",permalink:"/docs/angular/platform"},next:{title:"Data Storage",permalink:"/docs/angular/storage"}},l=[{value:"Testing Principles",id:"testing-principles",children:[]},{value:"Unit Testing",id:"unit-testing",children:[{value:"Using Mocks",id:"using-mocks",children:[]},{value:"General Testing Structure",id:"general-testing-structure",children:[]},{value:"Pages and Components",id:"pages-and-components",children:[]}]},{value:"Services",id:"services",children:[{value:"Basic Service Testing",id:"basic-service-testing",children:[]},{value:"Pipes",id:"pipes",children:[]}]},{value:"End-to-end Testing",id:"end-to-end-testing",children:[{value:"Test Structure",id:"test-structure",children:[]},{value:"Configuration",id:"configuration",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When an ",(0,s.kt)("inlineCode",{parentName:"p"},"@ionic/angular")," application is generated using the Ionic CLI, it is automatically set up for unit testing and end-to-end testing of the application. This is the same setup that is used by the Angular CLI. Refer to the ",(0,s.kt)("a",{href:"https://angular.io/guide/testing",target:"_blank"},"Angular Testing Guide")," for detailed information on testing Angular applications."),(0,s.kt)("h2",{id:"testing-principles"},"Testing Principles"),(0,s.kt)("p",null,"When testing an application, it is best to keep in mind that testing can show if defects are present in a system. However, it is impossible to prove that any non-trivial system is completely free of defects. For this reason, the goal of testing is not to verify that the code is correct but to find problems within the code. This is a subtle but important distinction."),(0,s.kt)("p",null,"If we set out to prove that the code is correct, we are more likely to stick to the happy path through the code. If we set out to find problems, we are more likely to more fully exercise the code and find the bugs that are lurking there."),(0,s.kt)("p",null,"It is also best to begin testing an application from the very start. This allows defects to be found early in the process when they are easier to fix. This also allows code to be refactored with confidence as new features are added to the system."),(0,s.kt)("h2",{id:"unit-testing"},"Unit Testing"),(0,s.kt)("p",null,"Unit tests exercise a single unit of code (component, page, service, pipe, etc) in isolation from the rest of the system. Isolation is achieved through the injection of mock objects in place of the code's dependencies. The mock objects allow the test to have fine-grained control of the outputs of the dependencies. The mocks also allow the test to determine which dependencies have been called and what has been passed to them."),(0,s.kt)("p",null,"Well-written unit tests are structured such that the unit of code and the features it contains are described via ",(0,s.kt)("inlineCode",{parentName:"p"},"describe()")," callbacks. The requirements for the unit of code and its features are tested via ",(0,s.kt)("inlineCode",{parentName:"p"},"it()")," callbacks. When the descriptions for the ",(0,s.kt)("inlineCode",{parentName:"p"},"describe()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"it()")," callbacks are read, they make sense as a phrase. When the descriptions for nested ",(0,s.kt)("inlineCode",{parentName:"p"},"describe()"),"s and a final ",(0,s.kt)("inlineCode",{parentName:"p"},"it()")," are concatenated together, they form a sentence that fully describes the test case."),(0,s.kt)("p",null,"Since unit tests exercise the code in isolation, they are fast, robust, and allow for a high degree of code coverage."),(0,s.kt)("h3",{id:"using-mocks"},"Using Mocks"),(0,s.kt)("p",null,"Unit tests exercise a code module in isolation. To facilitate this, we recommend using Jasmine (",(0,s.kt)("a",{parentName:"p",href:"https://jasmine.github.io/"},"https://jasmine.github.io/"),'). Jasmine creates mock objects (which Jasmine calls "spies") to take the place of dependencies while testing. When a mock object is used, the test can control the values returned by calls to that dependency, making the current test independent of changes made to the dependency. This also makes the test setup easier, allowing the test to only be concerned with the code within the module under test.'),(0,s.kt)("p",null,"Using mocks also allows the test to query the mock to determine if it was called and how it was called via the ",(0,s.kt)("inlineCode",{parentName:"p"},"toHaveBeenCalled*")," set of functions. Tests should be as specific as possible with these functions, favoring calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"toHaveBeenCalledTimes")," over calls to ",(0,s.kt)("inlineCode",{parentName:"p"},"toHaveBeenCalled")," when testing that a method has been called. That is ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(mock.foo).toHaveBeenCalledTimes(1)")," is better than ",(0,s.kt)("inlineCode",{parentName:"p"},"expect(mock.foo).toHaveBeenCalled()"),". The opposite advice should be followed when testing that something has not been called (",(0,s.kt)("inlineCode",{parentName:"p"},"expect(mock.foo).not.toHaveBeenCalled()"),")."),(0,s.kt)("p",null,"There are two common ways to create mock objects in Jasmine. Mock objects can be constructed from scratch using ",(0,s.kt)("inlineCode",{parentName:"p"},"jasmine.createSpy")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"jasmine.createSpyObj")," or spies can be installed onto existing objects using ",(0,s.kt)("inlineCode",{parentName:"p"},"spyOn()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"spyOnProperty()"),"."),(0,s.kt)("h4",{id:"using-jasminecreatespy-and-jasminecreatespyobj"},"Using ",(0,s.kt)("inlineCode",{parentName:"h4"},"jasmine.createSpy")," and ",(0,s.kt)("inlineCode",{parentName:"h4"},"jasmine.createSpyObj")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"jasmine.createSpyObj")," creates a full mock object from scratch with a set of mock methods defined on creation. This is useful in that it is very simple. Nothing needs to be constructed or injected into the test. The disadvantage of using this function is that it allows the creation of objects that may not match the real objects."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"jasmine.createSpy")," is similar but it creates a stand-alone mock function."),(0,s.kt)("h4",{id:"using-spyon-and-spyonproperty"},"Using ",(0,s.kt)("inlineCode",{parentName:"h4"},"spyOn()")," and ",(0,s.kt)("inlineCode",{parentName:"h4"},"spyOnProperty()")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"spyOn()")," installs the spy on an existing object. The advantage of using this technique is that if an attempt is made to spy on a method that does not exist on the object, an exception is raised. This prevents the test from mocking methods that do not exist. The disadvantage is that the test needs a fully formed object to begin with, which may increase the amount of test setup required."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"spyOnProperty()")," is similar with the difference being that it spies on a property and not a method."),(0,s.kt)("h3",{id:"general-testing-structure"},"General Testing Structure"),(0,s.kt)("p",null,"Unit tests are contained in ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," files with one ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," file per entity (component, page, service, pipe, etc.). The ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," files live side-by-side with and are named after the source that they are testing. For example, if the project has a service called WeatherService, the code for it is in a file named ",(0,s.kt)("inlineCode",{parentName:"p"},"weather.service.ts")," with the tests in a file named ",(0,s.kt)("inlineCode",{parentName:"p"},"weather.service.spec.ts"),". Both of those files are in the same folder."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"spec")," files themselves contain a single ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," call that defines that overall test. Nested within it are other ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," calls that define major areas of functionality. Each ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," call can contain setup and teardown code (generally handled via ",(0,s.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"afterEach")," calls), more ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," calls forming a hierarchical breakdown of functionality, and ",(0,s.kt)("inlineCode",{parentName:"p"},"it")," calls which define individual test cases."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"it")," calls also contain a descriptive text label. In well-formed tests, the ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"it")," calls combine with their labels to perform proper phrases and the full label for each test case, formed by combining the ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"it")," labels, creates a full sentence."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"describe('Calculation', () => {\n  describe('divide', () => {\n    it('calculates 4 / 2 properly' () => {});\n    it('cowardly refuses to divide by zero' () => {});\n    ...\n  });\n\n  describe('multiply', () => {\n    ...\n  });\n});\n")),(0,s.kt)("p",null,"The outer ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," call states that the ",(0,s.kt)("inlineCode",{parentName:"p"},"Calculation")," service is being tested, the inner ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," calls state exactly what functionality is being tested, and the ",(0,s.kt)("inlineCode",{parentName:"p"},"it")," calls state what the test cases are. When run the full label for each test case is a sentence that makes sense (Calculation divide cowardly refuses to divide by zero)."),(0,s.kt)("h3",{id:"pages-and-components"},"Pages and Components"),(0,s.kt)("p",null,"Pages are just Angular components. Thus, pages and components are both tested using ",(0,s.kt)("a",{href:"https://angular.io/guide/testing#component-test-basics"},"Angular's Component Testing")," guidelines."),(0,s.kt)("p",null,"Since pages and components contain both TypeScript code and HTML template markup it is possible to perform both component class testing and component DOM testing. When a page is created, the template test that is generated looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { async, ComponentFixture, TestBed } from '@angular/core/testing';\n\nimport { TabsPage } from './tabs.page';\n\ndescribe('TabsPage', () => {\n  let component: TabsPage;\n  let fixture: ComponentFixture<TabsPage>;\n\n  beforeEach(async () => {\n    TestBed.configureTestingModule({\n      declarations: [TabsPage],\n      schemas: [CUSTOM_ELEMENTS_SCHEMA],\n    }).compileComponents();\n  });\n\n  beforeEach(() => {\n    fixture = TestBed.createComponent(TabsPage);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create', () => {\n    expect(component).toBeTruthy();\n  });\n});\n")),(0,s.kt)("p",null,"When doing component class testing, the component object is accessed using the component object defined via ",(0,s.kt)("inlineCode",{parentName:"p"},"component = fixture.componentInstance;"),". This is an instance of the component class. When doing DOM testing, the ",(0,s.kt)("inlineCode",{parentName:"p"},"fixture.nativeElement")," property is used. This is the actual ",(0,s.kt)("inlineCode",{parentName:"p"},"HTMLElement")," for the component, which allows the test to use standard HTML API methods such as ",(0,s.kt)("inlineCode",{parentName:"p"},"HTMLElement.querySelector")," in order to examine the DOM."),(0,s.kt)("h2",{id:"services"},"Services"),(0,s.kt)("p",null,"Services often fall into one of two broad categories: utility services that perform calculations and other operations, and data services that perform primarily HTTP operations and data manipulation."),(0,s.kt)("h3",{id:"basic-service-testing"},"Basic Service Testing"),(0,s.kt)("p",null,"The suggested way to test most services is to instantiate the service and manually inject mocks for any dependency the service has. This way, the code can be tested in isolation."),(0,s.kt)("p",null,"Let's say that there is a service with a method that takes an array of timecards and calculates net pay. Let's also assume that the tax calculations are handled via another service that the current service depends on. This payroll service could be tested as such:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { PayrollService } from './payroll.service';\n\ndescribe('PayrollService', () => {\n  let service: PayrollService;\n  let taxServiceSpy;\n\n   beforeEach(() => {\n     taxServiceSpy = jasmine.createSpyObj('TaxService', {\n       federalIncomeTax: 0,\n       stateIncomeTax: 0,\n       socialSecurity: 0,\n       medicare: 0\n     });\n     service = new PayrollService(taxServiceSpy);\n   });\n\n   describe('net pay calculations', () => {\n     ...\n   });\n});\n")),(0,s.kt)("p",null,"This allows the test to control the values returned by the various tax calculations via mock setup such as ",(0,s.kt)("inlineCode",{parentName:"p"},"taxServiceSpy.federalIncomeTax.and.returnValue(73.24)"),'. This allows the "net pay" tests to be independent of the tax calculation logic. When the tax codes change, only the tax service related code and tests need to change. The tests for the net pay can continue to operate as they are since these tests do not care how the tax is calculated, just that the value is applied properly.'),(0,s.kt)("p",null,"The scaffolding that is used when a service is generated via ",(0,s.kt)("inlineCode",{parentName:"p"},"ionic g service name")," uses Angular's testing utilities and sets up a testing module. Doing so is not strictly necessary. That code may be left in, however, allowing the service to be built manually or injected as such:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { TestBed, inject } from '@angular/core/testing';\n\nimport { PayrollService } from './payroll.service';\nimport { TaxService } from './tax.service';\n\ndescribe('PayrolService', () => {\n  let taxServiceSpy;\n\n  beforeEach(() => {\n    taxServiceSpy = jasmine.createSpyObj('TaxService', {\n       federalIncomeTax: 0,\n       stateIncomeTax: 0,\n       socialSecurity: 0,\n       medicare: 0\n     });\n    TestBed.configureTestingModule({\n      providers: [\n        PayrollService,\n        { provide: TaxService, useValue: taxServiceSpy }\n      ]\n    });\n  });\n\n  it('does some test where it is injected',\n    inject([PayrollService], (service: PayrollService) => {\n      expect(service).toBeTruthy();\n    })\n  );\n\n  it('does some test where it is manually built', () => {\n    const service = new PayrollService(taxServiceSpy);\n    expect(service).toBeTruthy();\n  });\n});\n")),(0,s.kt)("h4",{id:"testing-http-data-services"},"Testing HTTP Data Services"),(0,s.kt)("p",null,"Most services that perform HTTP operations will use Angular's HttpClient service in order to perform those operations. For such tests, it is suggested to use Angular's ",(0,s.kt)("inlineCode",{parentName:"p"},"HttpClientTestingModule"),". For detailed documentation of this module, please see Angular's ",(0,s.kt)("a",{href:"https://angular.io/guide/http#testing-http-requests",target:"_blank"},"Angular's Testing HTTP requests")," guide."),(0,s.kt)("p",null,"This basic setup for such a test looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import {\n  HttpBackend,\n  HttpClient\n} from '@angular/common/http';\nimport {\n  HttpTestingController,\n  HttpClientTestingModule\n} from '@angular/common/http/testing';\nimport { TestBed, inject } from '@angular/core/testing';\n\nimport { IssTrackingDataService } from './iss-tracking-data.service';\n\ndescribe('IssTrackingDataService', () => {\n  let httpClient: HttpClient;\n  let httpTestingController: HttpTestingController;\n  let issTrackingDataService: IssTrackingDataService;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      imports: [HttpClientTestingModule],\n      providers: [\n        IssTrackingDataService\n      ]\n    });\n\n    httpClient = TestBed.get(HttpClient);\n    httpTestingController = TestBed.get(HttpTestingController);\n    issTrackingDataService = new IssTrackingDataService(httpClient);\n  });\n\n  it('exists', inject([IssTrackingDataService], (service: IssTrackingDataService) => {\n      expect(service).toBeTruthy();\n  }));\n\n  describe('location', () => {\n    it('gets the location of the ISS now', () => {\n      issTrackingDataService.location().subscribe(x => {\n        expect(x).toEqual({ longitude: -138.1719, latitude: 44.4423 });\n      });\n      const req = httpTestingController.expectOne(\n        'http://api.open-notify.org/iss-now.json'\n      );\n      expect(req.request.method).toEqual('GET');\n      req.flush({\n        iss_position: { longitude: '-138.1719', latitude: '44.4423' },\n        timestamp: 1525950644,\n        message: 'success'\n      });\n      httpTestingController.verify();\n    });\n  });\n});\n")),(0,s.kt)("h3",{id:"pipes"},"Pipes"),(0,s.kt)("p",null,"A pipe is like a service with a specifically defined interface. It is a class that contains one public method, ",(0,s.kt)("inlineCode",{parentName:"p"},"transform"),", which manipulates the input value (and other optional arguments) in order to create the output that is rendered on the page. To test a pipe: instantiate the pipe, call the transform method, and verify the results."),(0,s.kt)("p",null,"As a simple example, let's look at a pipe that takes a ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," object and formats the name. For the sake of simplicity, let's say a ",(0,s.kt)("inlineCode",{parentName:"p"},"Person")," consists of an ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"firstName"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"lastName"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"middleInitial"),'. The requirements for the pipe are to print the name as "Last, First M." handling situations where a first name, last name, or middle initial do not exist. Such a test might look like this:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { NamePipe } from './name.pipe';\n\nimport { Person } from '../../models/person';\n\ndescribe('NamePipe', () => {\n  let pipe: NamePipe;\n  let testPerson: Person;\n\n  beforeEach(() => {\n    pipe = new NamePipe();\n    testPerson = {\n      id: 42,\n      firstName: 'Douglas',\n      lastName: 'Adams',\n      middleInitial: 'N'\n    };\n  });\n\n  it('exists', () => {\n    expect(pipe).toBeTruthy();\n  });\n\n  it('formats a full name properly', () => {\n    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas N.');\n  });\n\n  it('handles having no middle initial', () => {\n    delete testPerson.middleInitial;\n    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas');\n  });\n\n  it('handles having no first name', () => {\n    delete testPerson.firstName;\n    expect(pipe.transform(testPerson)).toBeEqual('Adams N.');\n  });\n\n  it('handles having no last name', () => {\n    delete testPerson.lastName;\n    expect(pipe.transform(testPerson)).toBeEqual('Douglas N.');\n  });\n});\n")),(0,s.kt)("p",null,"It is also beneficial to exercise the pipe via DOM testing in the components and pages that utilize the pipe."),(0,s.kt)("h2",{id:"end-to-end-testing"},"End-to-end Testing"),(0,s.kt)("p",null,"End-to-end testing is used to verify that an application works as a whole and often includes a connection to live data. Whereas unit tests focus on code units in isolation and thus allow for low-level testing of the application logic, end-to-end tests focus on various user stories or usage scenarios, providing high-level testing of the overall flow of data through the application. Whereas unit tests try to uncover problems with an application's logic, end-to-end tests try to uncover problems that occur when those individual units are used together. End-to-end tests uncover problems with the overall architecture of the application."),(0,s.kt)("p",null,"Since end-to-end tests exercise user stories and cover the application as a whole rather than individual code modules, end-to-end tests exist in their own application in the project apart from the code for the main application itself. Most end-to-end tests operate by automating common user interactions with the application and examining the DOM to determine the results of those interactions."),(0,s.kt)("h3",{id:"test-structure"},"Test Structure"),(0,s.kt)("p",null,"When an ",(0,s.kt)("inlineCode",{parentName:"p"},"@ionic/angular")," application is generated, a default end-to-end test application is generated in the ",(0,s.kt)("inlineCode",{parentName:"p"},"e2e")," folder. This application uses ",(0,s.kt)("a",{href:""},"Protractor")," to control the browser and ",(0,s.kt)("a",{href:""},"Jasmine")," to structure and execute the tests. The application initially consists of four files:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"protractor.conf.js")," - the Protractor configuration file"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"tsconfig.e2e.json")," - specific TypeScript configuration for the testing application"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"src/app.po.ts")," - a page object containing methods that navigate the application, query elements in the DOM, and maninpulate elements on the page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"src/app.e2e-spec.ts")," - a testing script")),(0,s.kt)("h4",{id:"page-objects"},"Page Objects"),(0,s.kt)("p",null,"End-to-end tests operate by automating common user interactions with the application, waiting for the application to respond, and examining the DOM to determine the results of the interaction. This involves a lot of DOM manipulation and examination. If this were all done manually, the tests would be very brittle and difficult to read and maintain."),(0,s.kt)("p",null,"Page objects encapsulate the HTML for a single page in a TypeScript class, providing an API that the test scripts use to interact with the application. The encapsulation of the DOM manipulation logic in page objects makes the tests more readable and far easier to reason about, lowering the maintenance costs of the test. Creating well-crafted page objects is the key to creating high quality and maintainable end-to-end tests."),(0,s.kt)("h5",{id:"base-page-object"},"Base Page Object"),(0,s.kt)("p",null,"A lot of tests rely on actions such as waiting for a page to be visible, entering text into an input, and clicking a button. The methods used to do this remain consistent with only the CSS selectors used to get the appropriate DOM element changing. Therefore it makes sense to abstract this logic into a base class that can be used by the other page objects."),(0,s.kt)("p",null,"Here is an example that implements a few basic methods that all page objects will need to support."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { browser, by, element, ExpectedConditions } from 'protractor';\n\nexport class PageObjectBase {\n  private path: string;\n  protected tag: string;\n\n  constructor(tag: string, path: string) {\n    this.tag = tag;\n    this.path = path;\n  }\n\n  load() {\n    return browser.get(this.path);\n  }\n\n  rootElement() {\n    return element(by.css(this.tag));\n  }\n\n  waitUntilInvisible() {\n    browser.wait(ExpectedConditions.invisibilityOf(this.rootElement()), 3000);\n  }\n\n  waitUntilPresent() {\n    browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 3000);\n  }\n\n  waitUntilNotPresent() {\n    browser.wait(\n      ExpectedConditions.not(ExpectedConditions.presenceOf(this.rootElement())),\n      3000\n    );\n  }\n\n  waitUntilVisible() {\n    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);\n  }\n\n  getTitle() {\n    return element(by.css(`${this.tag} ion-title`)).getText();\n  }\n\n  protected enterInputText(sel: string, text: string) {\n    const el = element(by.css(`${this.tag} ${sel}`));\n    const inp = el.element(by.css('input'));\n    inp.sendKeys(text);\n  }\n\n  protected enterTextareaText(sel: string, text: string) {\n    const el = element(by.css(`${this.tag} ${sel}`));\n    const inp = el.element(by.css('textarea'));\n    inp.sendKeys(text);\n  }\n\n  protected clickButton(sel: string) {\n    const el = element(by.css(`${this.tag} ${sel}`));\n    browser.wait(ExpectedConditions.elementToBeClickable(el));\n    el.click();\n  }\n}\n")),(0,s.kt)("h5",{id:"per-page-abstractions"},"Per-Page Abstractions"),(0,s.kt)("p",null,"Each page in the application will have its own page object class that abstracts the elements on that page. If a base page object class is used, creating the page object involves mostly creating custom methods for elements that are specific to that page. Often, these custom elements take advantage of methods in the base class in order to perform the work that is required."),(0,s.kt)("p",null,"Here is an example page object for a simple but typical login page. Notice that many of the methods, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"enterEMail()"),", call methods in the base class that perform the bulk of the work."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { browser, by, element, ExpectedConditions } from 'protractor';\nimport { PageObjectBase } from './base.po';\n\nexport class LoginPage extends PageObjectBase {\n  constructor() {\n    super('app-login', '/login');\n  }\n\n  waitForError() {\n    browser.wait(\n      ExpectedConditions.presenceOf(element(by.css('.error'))),\n      3000\n    );\n  }\n\n  getErrorMessage() {\n    return element(by.css('.error')).getText();\n  }\n\n  enterEMail(email: string) {\n    this.enterInputText('#email-input', email);\n  }\n\n  enterPassword(password: string) {\n    this.enterInputText('#password-input', password);\n  }\n\n  clickSignIn() {\n    this.clickButton('#signin-button');\n  }\n}\n")),(0,s.kt)("h4",{id:"testing-scripts"},"Testing Scripts"),(0,s.kt)("p",null,"Similar to unit tests, end-to-end test scripts consist of nested ",(0,s.kt)("inlineCode",{parentName:"p"},"describe()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"it()")," functions. In the case of end-to-end tests, the ",(0,s.kt)("inlineCode",{parentName:"p"},"describe()")," functions generally denote specific scenarios with the ",(0,s.kt)("inlineCode",{parentName:"p"},"it()")," functions denoting specific behaviors that should be exhibited by the application as actions are performed within that scenario."),(0,s.kt)("p",null,"Also similar to unit tests, the labels used in the ",(0,s.kt)("inlineCode",{parentName:"p"},"describe()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"it()"),' functions should make sense both with the "describe" or "it" and when concatenated together to form the complete test case.'),(0,s.kt)("p",null,"Here is a sample end-to-end test script that exercises some typical login scenarios."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { AppPage } from '../page-objects/pages/app.po';\nimport { AboutPage } from '../page-objects/pages/about.po';\nimport { CustomersPage } from '../page-objects/pages/customers.po';\nimport { LoginPage } from '../page-objects/pages/login.po';\nimport { MenuPage } from '../page-objects/pages/menu.po';\nimport { TasksPage } from '../page-objects/pages/tasks.po';\n\ndescribe('Login', () => {\n  const about = new AboutPage();\n  const app = new AppPage();\n  const customers = new CustomersPage();\n  const login = new LoginPage();\n  const menu = new MenuPage();\n  const tasks = new TasksPage();\n\n  beforeEach(() => {\n    app.load();\n  });\n\n  describe('before logged in', () => {\n    it('displays the login screen', () => {\n      expect(login.rootElement().isDisplayed()).toEqual(true);\n    });\n\n    it('allows in-app navigation to about', () => {\n      menu.clickAbout();\n      about.waitUntilVisible();\n      login.waitUntilInvisible();\n    });\n\n    it('does not allow in-app navigation to tasks', () => {\n      menu.clickTasks();\n      app.waitForPageNavigation();\n      expect(login.rootElement().isDisplayed()).toEqual(true);\n    });\n\n    it('does not allow in-app navigation to customers', () => {\n      menu.clickCustomers();\n      app.waitForPageNavigation();\n      expect(login.rootElement().isDisplayed()).toEqual(true);\n    });\n\n    it('displays an error message if the login fails', () => {\n      login.enterEMail('test@test.com');\n      login.enterPassword('bogus');\n      login.clickSignIn();\n      login.waitForError();\n      expect(login.getErrorMessage()).toEqual(\n        'The password is invalid or the user does not have a password.'\n      );\n    });\n\n    it('navigates to the tasks page if the login succeeds', () => {\n      login.enterEMail('test@test.com');\n      login.enterPassword('testtest');\n      login.clickSignIn();\n      tasks.waitUntilVisible();\n    });\n  });\n\n  describe('once logged in', () => {\n    beforeEach(() => {\n      tasks.waitUntilVisible();\n    });\n\n    it('allows navigation to the customers page', () => {\n      menu.clickCustomers();\n      customers.waitUntilVisible();\n      tasks.waitUntilInvisible();\n    });\n\n    it('allows navigation to the about page', () => {\n      menu.clickAbout();\n      about.waitUntilVisible();\n      tasks.waitUntilInvisible();\n    });\n\n    it('allows navigation back to the tasks page', () => {\n      menu.clickAbout();\n      tasks.waitUntilInvisible();\n      menu.clickTasks();\n      tasks.waitUntilVisible();\n    });\n  });\n});\n")),(0,s.kt)("h3",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"The default configuration uses the same ",(0,s.kt)("inlineCode",{parentName:"p"},"environment.ts")," file that is used for development. In order to provide better control over the data used by the end-to-end tests, it is often useful to create a specific environment for testing and use that environment for the tests. This section shows one possible way to create this configuration."),(0,s.kt)("h4",{id:"testing-environment"},"Testing Environment"),(0,s.kt)("p",null,"Setting up a testing environment involves creating a new environment file that uses a dedicated testing backend, updating the ",(0,s.kt)("inlineCode",{parentName:"p"},"angular.json")," file to use that environment, and modifying the ",(0,s.kt)("inlineCode",{parentName:"p"},"e2e")," script in the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," to specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," environment."),(0,s.kt)("h5",{id:"create-the-environmente2ets-file"},"Create the ",(0,s.kt)("inlineCode",{parentName:"h5"},"environment.e2e.ts")," File"),(0,s.kt)("p",null,"The Angular ",(0,s.kt)("inlineCode",{parentName:"p"},"environment.ts")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"environment.prod.ts")," files are often used to store information such as the base URL for the application's backend data services. Create an ",(0,s.kt)("inlineCode",{parentName:"p"},"environment.e2e.ts")," that provides the same information, only connecting to backend services that are dedicated to testing rather than the development or production backend services. Here is an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-TypeScript"},"export const environment = {\n  production: false,\n  databaseURL: 'https://e2e-test-api.my-great-app.com',\n  projectId: 'my-great-app-e2e'\n};\n\n")),(0,s.kt)("h5",{id:"modify-the-angularjson-file"},"Modify the ",(0,s.kt)("inlineCode",{parentName:"h5"},"angular.json")," File"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"angular.json")," file needs to be modified to use this file. This is a layered process. Follow the XPaths listed below to add the configuration that is required."),(0,s.kt)("p",null,"Add a configuration at ",(0,s.kt)("inlineCode",{parentName:"p"},"/projects/app/architect/build/configurations")," called ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," that does the file replacement:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON"},'            "test": {\n              "fileReplacements": [\n                {\n                  "replace": "src/environments/environment.ts",\n                  "with": "src/environments/environment.e2e.ts"\n                }\n              ]\n            }\n')),(0,s.kt)("p",null,"Add a configuration at ",(0,s.kt)("inlineCode",{parentName:"p"},"/projects/app/architect/serve/configurations")," called ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," that points the browser target at the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," build configuration that was defined above."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON"},'            "test": {\n              "browserTarget": "app:build:test"\n            }\n')),(0,s.kt)("p",null,"Add a configuration at ",(0,s.kt)("inlineCode",{parentName:"p"},"/projects/app-e2e/architect/e2e/configurations")," called ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," that does points the dev server target at the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," serve configuration defined above."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON"},'            "test": {\n              "devServerTarget": "app:serve:test"\n            }\n')),(0,s.kt)("h5",{id:"modify-the-packagejson-file"},"Modify the ",(0,s.kt)("inlineCode",{parentName:"h5"},"package.json")," File"),(0,s.kt)("p",null,"Modify the ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file so that ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run e2e")," uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," configuration."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON"},'  "scripts": {\n    "e2e": "ng e2e --configuration=test",\n    "lint": "ng lint",\n    "ng": "ng",\n    "start": "ng serve",\n    "test": "ng test",\n    "test:dev": "ng test --browsers=ChromeHeadlessCI",\n    "test:ci": "ng test --no-watch --browsers=ChromeHeadlessCI"\n  },\n')),(0,s.kt)("h4",{id:"test-cleanup"},"Test Cleanup"),(0,s.kt)("p",null,"If the end-to-end tests modify data in any way it is helpful to reset the data to a known state once the test completes. One way to do that is to:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create an endpoint that performs the cleanup."),(0,s.kt)("li",{parentName:"ol"},"Add a ",(0,s.kt)("inlineCode",{parentName:"li"},"onCleanUp()")," function to the ",(0,s.kt)("inlineCode",{parentName:"li"},"config")," object exported by the ",(0,s.kt)("inlineCode",{parentName:"li"},"protractor.conf.js")," file.")),(0,s.kt)("p",null,"Here is an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JavaScript"},"  onCleanUp() {\n    const axios = require('axios');\n    return axios\n      .post(\n        'https://e2e-test-api.my-great-app.com/purgeDatabase',\n        {}\n      )\n      .then(res => {\n        console.log(res.data);\n      })\n      .catch(err => console.log(err));\n  }\n")))}p.isMDXComponent=!0}}]);