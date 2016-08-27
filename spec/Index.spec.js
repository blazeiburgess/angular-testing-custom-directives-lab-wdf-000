// Note to self: Protractor's documentation is awful. Syntax needs to be exact to get the page loaded w/Angular directives
// http://www.protractortest.org/#/api?view=ElementFinder.prototype.all
// http://www.protractortest.org/#/api?view=ElementArrayFinder.prototype.first
describe('Directive Test', function () {
  browser.get('http://localhost:8080');
  var profile = element.all(by.css('user-profile')).first();
  // var name = element(by.css('user-profile h6')); 
  // var position = element(by.css('user-profile h6'));
  // var description = element(by.css('user-profile p'));

  it('should have name', function () {
    // expect(name.getInnerHtml()).toContain("Name");
    expect(profile.getText()).toContain("Name:");
  });

  it('should have position', function () {
    // expect(position.getInnerHtml()).toContain("Position:");
    expect(profile.getText()).toContain("Position:");
  });

  it('should have description', function () {
    // expect(description.getInnerHtml()).toContain("Description:");
    expect(profile.getText()).toContain("Description:");
  });
});
