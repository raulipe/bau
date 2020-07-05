package runner;
/**
 * Created by robson on 30/08/2017.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/features"}, plugin = {"html:target/reports/cucumberReports"},
        glue = "steps", tags = {"~@ignore", "@regressive"})
public class RunnerTest {
}
